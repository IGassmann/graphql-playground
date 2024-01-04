package graph

//go:generate go run github.com/99designs/gqlgen generate

import (
	"github.com/IGassmann/graphql-playground/apps/api/graph/model"
)

type Resolver struct {
	starships map[string]model.Starship
	people    map[string]model.Person
}

func NewRootResolver() *Resolver {
	r := Resolver{}
	r.starships = map[string]model.Starship{
		"10": {
			ID:                   "10",
			Name:                 stringPtr("Millennium Falcon"),
			Model:                stringPtr("YT-1300 light freighter"),
			Manufacturers:        []*string{stringPtr("Corellian Engineering Corporation")},
			CostInCredits:        float64Ptr(100000),
			Length:               float64Ptr(34.37),
			MaxAtmospheringSpeed: intPtr(1050),
			Crew:                 stringPtr("4"),
			Passengers:           stringPtr("6"),
			CargoCapacity:        float64Ptr(100000),
			Consumables:          stringPtr("2 months"),
			HyperdriveRating:     float64Ptr(0.5),
			Mglt:                 intPtr(75),
			StarshipClass:        stringPtr("Light freighter"),
			CreatedAt:            stringPtr("2014-12-10T16:59:45.094000Z"),
			UpdatedAt:            stringPtr("2014-12-20T21:23:49.880000Z"),
			PilotIDs:             []string{"13", "14", "25", "31"},
		},
		"11": {
			ID:                   "11",
			Name:                 stringPtr("Y-wing"),
			Model:                stringPtr("BTL Y-wing"),
			Manufacturers:        []*string{stringPtr("Koensayr Manufacturing")},
			CostInCredits:        float64Ptr(134999),
			Length:               float64Ptr(14),
			MaxAtmospheringSpeed: intPtr(1000),
			Crew:                 stringPtr("2"),
			Passengers:           stringPtr("0"),
			CargoCapacity:        float64Ptr(110),
			Consumables:          stringPtr("1 week"),
			HyperdriveRating:     float64Ptr(1),
			Mglt:                 intPtr(80),
			StarshipClass:        stringPtr("assault starfighter"),
			CreatedAt:            stringPtr("2014-12-12T11:00:39.817000Z"),
			UpdatedAt:            stringPtr("2014-12-20T21:23:49.883000Z"),
		},
		"12": {
			ID:                   "12",
			Name:                 stringPtr("X-wing"),
			Model:                stringPtr("T-65 X-wing"),
			Manufacturers:        []*string{stringPtr("Incom Corporation")},
			CostInCredits:        float64Ptr(149999),
			Length:               float64Ptr(12.5),
			MaxAtmospheringSpeed: intPtr(1050),
			Crew:                 stringPtr("1"),
			Passengers:           stringPtr("0"),
			CargoCapacity:        float64Ptr(110),
			Consumables:          stringPtr("1 week"),
			HyperdriveRating:     float64Ptr(1),
			Mglt:                 intPtr(100),
			StarshipClass:        stringPtr("Starfighter"),
			CreatedAt:            stringPtr("2014-12-12T11:19:05.340000Z"),
			UpdatedAt:            stringPtr("2014-12-20T21:23:49.886000Z"),
			PilotIDs:             []string{"1", "9", "18", "19"},
		},
		"2": {
			ID:                   "2",
			Name:                 stringPtr("CR90 corvette"),
			Model:                stringPtr("CR90 corvette"),
			Manufacturers:        []*string{stringPtr("Corellian Engineering Corporation")},
			CostInCredits:        float64Ptr(3500000),
			Length:               float64Ptr(150),
			MaxAtmospheringSpeed: intPtr(950),
			Crew:                 stringPtr("30-165"),
			Passengers:           stringPtr("600"),
			CargoCapacity:        float64Ptr(3000000),
			Consumables:          stringPtr("1 year"),
			HyperdriveRating:     float64Ptr(2),
			Mglt:                 intPtr(60),
			StarshipClass:        stringPtr("corvette"),
			CreatedAt:            stringPtr("2014-12-10T14:20:33.369000Z"),
			UpdatedAt:            stringPtr("2014-12-20T21:23:49.867000Z"),
		},
		"3": {
			ID:                   "3",
			Name:                 stringPtr("Star Destroyer"),
			Model:                stringPtr("Imperial I-class Star Destroyer"),
			Manufacturers:        []*string{stringPtr("Kuat Drive Yards")},
			CostInCredits:        float64Ptr(150000000),
			Length:               float64Ptr(1600),
			MaxAtmospheringSpeed: intPtr(975),
			Crew:                 stringPtr("47,060"),
			CargoCapacity:        float64Ptr(36000000),
			Consumables:          stringPtr("2 years"),
			HyperdriveRating:     float64Ptr(2),
			Mglt:                 intPtr(60),
			StarshipClass:        stringPtr("Star Destroyer"),
			CreatedAt:            stringPtr("2014-12-10T15:08:19.848000Z"),
			UpdatedAt:            stringPtr("2014-12-20T21:23:49.870000Z"),
		},
	}
	r.people = map[string]model.Person{
		"1": {
			ID:          "1",
			Name:        stringPtr("Luke Skywalker"),
			BirthYear:   stringPtr("19BBY"),
			EyeColor:    stringPtr("blue"),
			Gender:      stringPtr("male"),
			HairColor:   stringPtr("blond"),
			Height:      intPtr(172),
			Mass:        float64Ptr(77),
			SkinColor:   stringPtr("fair"),
			CreatedAt:   stringPtr("2014-12-09T13:50:51.644000Z"),
			UpdatedAt:   stringPtr("2014-12-20T21:17:56.891000Z"),
			StarshipIDs: []string{"12", "22"},
		},
		"14": {
			ID:          "14",
			Name:        stringPtr("Han Solo"),
			BirthYear:   stringPtr("29BBY"),
			EyeColor:    stringPtr("brown"),
			Gender:      stringPtr("male"),
			HairColor:   stringPtr("brown"),
			Height:      intPtr(180),
			Mass:        float64Ptr(80),
			SkinColor:   stringPtr("fair"),
			CreatedAt:   stringPtr("2014-12-10T16:49:14.582000Z"),
			UpdatedAt:   stringPtr("2014-12-20T21:17:50.334000Z"),
			StarshipIDs: []string{"10", "22"},
		},
		"13": {
			ID:          "13",
			Name:        stringPtr("Chewbacca"),
			BirthYear:   stringPtr("200BBY"),
			EyeColor:    stringPtr("blue"),
			Gender:      stringPtr("male"),
			HairColor:   stringPtr("brown"),
			Height:      intPtr(228),
			Mass:        float64Ptr(112),
			SkinColor:   stringPtr("unknown"),
			CreatedAt:   stringPtr("2014-12-10T16:42:45.066000Z"),
			UpdatedAt:   stringPtr("2014-12-20T21:17:50.332000Z"),
			StarshipIDs: []string{"10", "22"},
		},
		"25": {
			ID:          "25",
			Name:        stringPtr("Land Calrissian"),
			BirthYear:   stringPtr("31BBY"),
			EyeColor:    stringPtr("brown"),
			Gender:      stringPtr("male"),
			HairColor:   stringPtr("black"),
			Height:      intPtr(177),
			Mass:        float64Ptr(79),
			SkinColor:   stringPtr("dark"),
			CreatedAt:   stringPtr("2014-12-15T12:56:32.683000Z"),
			UpdatedAt:   stringPtr("2014-12-20T21:17:50.369000Z"),
			StarshipIDs: []string{"10"},
		},
	}

	return &r
}

func stringPtr(s string) *string {
	return &s
}

func float64Ptr(f float64) *float64 {
	return &f
}

func intPtr(i int) *int {
	return &i
}
