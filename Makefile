## Variables
DESKTOP_JS_FILE  = public/js/index.js
DESKTOP_JSX_FILE = src/js/index.jsx
JSX_SRC_DIR = src/js
JSX_DEPENDENCIES = $(shell find $(JSX_SRC_DIR) -name "*.js*")

# Tasks
all: $(DESKTOP_JS_FILE)

## Recipes

$(DESKTOP_JS_FILE): $(JSX_DEPENDENCIES) $(DATA)
	./node_modules/.bin/browserify -t reactify $(DESKTOP_JSX_FILE) > $(DESKTOP_JS_FILE)

## Cleanup task
clean: 
	rm -f $(DESKTOP_JS_FILE)


.PHONY: install uninstall clean