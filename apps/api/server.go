package main

import (
	"github.com/peterhellberg/swapi"
	"log"
	"net/http"
	"os"

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

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: graph.NewRootResolver(swapi.DefaultClient)}))

	http.Handle("/", playground.Handler("API", "/graphql"))
	http.Handle("/graphql", srv)

	log.Printf("connect to http://localhost:%s/ for API", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
