package graph

//go:generate go run github.com/99designs/gqlgen generate

import (
	"github.com/peterhellberg/swapi"
)

type Resolver struct {
	swapiClient *swapi.Client
}

func NewRootResolver(swapiClient *swapi.Client) *Resolver {
	return &Resolver{swapiClient}
}
