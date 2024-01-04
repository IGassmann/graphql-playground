package model

// A single transport craft that has hyperdrive capability.
type Starship struct {
	// The ID of this starship.
	ID string `json:"id"`
	// The name of this starship. The common name, such as “Death Star”.
	Name *string `json:"name,omitempty"`
	// The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
	// Orbital Battle Station".
	Model *string `json:"model,omitempty"`
	// The class of this starship, such as "Starfighter" or "Deep Space Mobile
	// Battlestation"
	StarshipClass *string `json:"starshipClass,omitempty"`
	// The manufacturers of this starship.
	Manufacturers []*string `json:"manufacturers,omitempty"`
	// The cost of this starship new, in galactic credits.
	CostInCredits *float64 `json:"costInCredits,omitempty"`
	// The length of this starship in meters.
	Length *float64 `json:"length,omitempty"`
	// The number of personnel needed to run or pilot this starship.
	Crew *string `json:"crew,omitempty"`
	// The number of non-essential people this starship can transport.
	Passengers *string `json:"passengers,omitempty"`
	// The maximum speed of this starship in atmosphere. null if this starship is
	// incapable of atmosphering flight.
	MaxAtmospheringSpeed *int `json:"maxAtmospheringSpeed,omitempty"`
	// The class of this starships hyperdrive.
	HyperdriveRating *float64 `json:"hyperdriveRating,omitempty"`
	// The Maximum number of Megalights this starship can travel in a standard hour.
	// A "Megalight" is a standard unit of distance and has never been defined before
	// within the Star Wars universe. This figure is only really useful for measuring
	// the difference in speed of starships. We can assume it is similar to AU, the
	// distance between our Sun (Sol) and Earth.
	Mglt *int `json:"mglt,omitempty"`
	// The maximum number of kilograms that this starship can transport.
	CargoCapacity *float64 `json:"cargoCapacity,omitempty"`
	// The maximum length of time that this starship can provide consumables for its
	// entire crew without having to resupply.
	Consumables     *string `json:"consumables,omitempty"`
	PilotIDs        []string
	PilotConnection *PilotsConnection `json:"pilotConnection,omitempty"`
	// The ISO 8601 date format of the time that this resource was created.
	CreatedAt *string `json:"createdAt,omitempty"`
	// The ISO 8601 date format of the time that this resource was updated.
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

// An individual person or character within the Star Wars universe.
type Person struct {
	// The ID of this person.
	ID string `json:"id"`
	// The name of this person.
	Name *string `json:"name,omitempty"`
	// The birth year of the person, using the in-universe standard of BBY or ABY -
	// Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
	// a battle that occurs at the end of Star Wars episode IV: A New Hope.
	BirthYear *string `json:"birthYear,omitempty"`
	// The eye color of this person. Will be "unknown" if not known or "n/a" if the
	// person does not have an eye.
	EyeColor *string `json:"eyeColor,omitempty"`
	// The gender of this person. Either "Male", "Female" or "unknown",
	// "n/a" if the person does not have a gender.
	Gender *string `json:"gender,omitempty"`
	// The hair color of this person. Will be "unknown" if not known or "n/a" if the
	// person does not have hair.
	HairColor *string `json:"hairColor,omitempty"`
	// The height of the person in centimeters.
	Height *int `json:"height,omitempty"`
	// The mass of the person in kilograms.
	Mass *float64 `json:"mass,omitempty"`
	// The skin color of this person.
	SkinColor          *string `json:"skinColor,omitempty"`
	StarshipIDs        []string
	StarshipConnection *StarshipsConnection `json:"starshipConnection,omitempty"`
	// The ISO 8601 date format of the time that this resource was created.
	CreatedAt *string `json:"createdAt,omitempty"`
	// The ISO 8601 date format of the time that this resource was updated.
	UpdatedAt *string `json:"updatedAt,omitempty"`
}
