package graph

import (
	"github.com/vektah/gqlparser/v2/gqlerror"
)

const (
	UserInputError = "BAD_USER_INPUT"
	NotFoundError  = "NOT_FOUND"
	SystemError    = "INTERNAL_SYSTEM_ERROR"
)

func NewUserInputError(message string, argument string) *gqlerror.Error {
	return &gqlerror.Error{
		Message: message,
		Extensions: map[string]interface{}{
			"code":  UserInputError,
			"input": argument,
		},
	}
}

func NewObjectNotFoundError(message string, objectName string, objectID string) *gqlerror.Error {
	return &gqlerror.Error{
		Message: message,
		Extensions: map[string]interface{}{
			"code": NotFoundError,
			"object": map[string]string{
				"id":   objectID,
				"name": objectName,
			},
		},
	}
}

func NewSystemError() *gqlerror.Error {
	return &gqlerror.Error{
		Message: "Internal system error.",
		Extensions: map[string]interface{}{
			"code": SystemError,
		},
	}
}

func NewGenericError(ext map[string]interface{}) *gqlerror.Error {
	return &gqlerror.Error{
		Message:    "Something went wrong!",
		Extensions: ext,
	}
}
