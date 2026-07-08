TEX = aj-villalobos-senior-ruby-on-rails-engineer-resume.tex
PDF = aj-villalobos-senior-ruby-on-rails-engineer-resume.pdf
TXT = aj-villalobos-senior-ruby-on-rails-engineer-resume.txt
PUBLIC_PDF = ../public/aj-villalobos-senior-ruby-on-rails-engineer-resume.pdf

.PHONY: all clean

all: $(PDF) $(TXT) $(PUBLIC_PDF)

$(PDF): $(TEX)
	@if command -v tectonic >/dev/null 2>&1; then \
		tectonic $(TEX); \
	else \
		echo "No TeX compiler found. Install tectonic with: brew install tectonic"; \
		exit 1; \
	fi

$(TXT): $(PDF)
	@pdftotext -layout $(PDF) - | perl -CS -pe "s/\x{2022}/-/g; s/\x{2019}/'/g; s/\x{2013}|\x{2014}/-/g; s/\x{00A0}/ /g; s/\x{FB01}/fi/g; s/\x{FB02}/fl/g; s/\x{037E}/;/g; s/\f/\n/g; s/[ \t]+$$//" > $(TXT)

$(PUBLIC_PDF): $(PDF)
	cp $(PDF) $(PUBLIC_PDF)

clean:
	rm -f *.aux *.log *.out
