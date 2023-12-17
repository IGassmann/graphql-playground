package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/IGassmann/graphql-playground/apps/api"
	"github.com/IGassmann/graphql-playground/apps/api/generated"
)

func main() {
	srv := handler.NewDefaultServer(generated.NewExecutableSchema(api.NewResolver()))
	srv.AroundFields(func(ctx context.Context, next graphql.Resolver) (res interface{}, err error) {
		rc := graphql.GetFieldContext(ctx)
		fmt.Println("Entered", rc.Object, rc.Field.Name)
		res, err = next(ctx)
		fmt.Println("Left", rc.Object, rc.Field.Name, "=>", res, err)
		return res, err
	})

	http.Handle("/graphql", srv)
	http.Handle("/", playground.Handler("API", "/graphql"))

	log.Fatal(http.ListenAndServe(":8080", nil))
}
