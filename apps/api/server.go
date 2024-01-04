package main

import (
	"context"
	"errors"
	"fmt"
	"github.com/99designs/gqlgen/graphql"
	"github.com/go-chi/chi"
	"github.com/rs/cors"
	"github.com/vektah/gqlparser/v2/gqlerror"
	"log"
	"net/http"
	"os"
	"runtime/debug"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/IGassmann/graphql-playground/apps/api/graph"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	router := chi.NewRouter()

	// Add CORS middleware around every request
	// See https://github.com/rs/cors for full option listing
	router.Use(cors.AllowAll().Handler)

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: graph.NewRootResolver()}))

	srv.SetRecoverFunc(func(ctx context.Context, err interface{}) error {
		fmt.Fprintln(os.Stderr, err)
		fmt.Fprintln(os.Stderr)

		errStack := string(debug.Stack())
		fmt.Fprintln(os.Stderr, errStack)

		return graph.NewSystemError()
	})
	srv.SetErrorPresenter(func(ctx context.Context, err error) *gqlerror.Error {
		var gqlErr *gqlerror.Error
		// TODO: This doesn't work because all errors get already wrapped by gqlgen.ErrorOnPath. We need to declare our own custom error type and use that instead.
		if !errors.As(err, &gqlErr) {
			gqlErr = graph.NewSystemError()
		}
		if gqlErr.Path == nil {
			gqlErr.Path = graphql.GetPath(ctx)
		}
		return gqlErr
	})

	router.Handle("/", playground.Handler("API", "/graphql"))
	router.Handle("/graphql", srv)

	log.Printf("connect to http://localhost:%s/ for API", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
