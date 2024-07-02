.PHONY: build 

all: build
SOURCES:=$(patsubst %/,%,$(dir $(wildcard */package.json)))
DISTDIR=$(CURDIR)/dist


.PHONY: $(addprefix get-deps_,$(SOURCES)) $(addprefix build-page_,$(SOURCES)) $(addprefix copy-page_,$(SOURCES))

define SUBPAGE_template
get-deps_$(1):
	cd $(1) && [ -d node_modules ] || npm ci

build-page_$(1): get-deps_$(1)
	cd $(1) && npm run build

copy-page_$(1): build-page_$(1)
	cd $(1) && \
	mkdir -p $(DISTDIR)/$(1) && \
	cp -r dist/* $(DISTDIR)/$(1)

endef


$(foreach subpage,$(SOURCES),$(eval $(call SUBPAGE_template,$(subpage))))


build: $(addprefix copy-page_,$(SOURCES))
	node build-index.js $(SOURCES) > dist/index.html

