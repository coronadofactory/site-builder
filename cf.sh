#!/bin/sh

# cf web Installer
# 
# Copyright (c) 1984-2024 Jose Garcia
# Released under the MIT license
# https://raw.githubusercontent.com/coronadofactory/site-builder/refs/heads/main/LICENSE.txt
#
# Date: 2024-12-04
#

git="https://raw.githubusercontent.com/coronadofactory/site-builder/refs/heads/main"
src="src"
infrastructure="src/infrastructure"
public="public"

module=$1


if [ ! -d "node_modules" ]; then

      echo "Node Modules must be installed before"
      exit

fi

if [ ! -d "$infrastructure" ]; then
  mkdir $infrastructure
fi