#!/usr/bin/env bash

json-server --host 0.0.0.0 --id id --watch db.json --routes routes.json --port 8080
