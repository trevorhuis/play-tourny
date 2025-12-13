package app

import (
	"log"
	"os"
)

type Application struct {
	Logger *log.Logger
}

func NewApplication() {
	logger := log.New(os.Stdout)
}
