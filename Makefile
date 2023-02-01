.PHONY: serve

serve:
	docker run -it --rm -v ${PWD}:/src -w /src -p 8080:8080 training/vue yarn run serve
