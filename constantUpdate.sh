#!/bin/bash

# Define the source directory and container ID
SOURCE_DIR="./"
CONTAINER_ID="1256ac2d04b0"
DEST_DIR="/app/"

while true; do
    # Execute the docker cp command
    docker cp "$SOURCE_DIR" "$CONTAINER_ID:$DEST_DIR"

    # Sleep for 2 seconds
    echo updated!
    sleep 2
done
