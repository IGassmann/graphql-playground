package graph

//go:generate go run github.com/99designs/gqlgen generate

import "github.com/IGassmann/graphql-playground/apps/api/graph/model"

type Resolver struct {
	allStarships *model.StarshipsConnection
}
