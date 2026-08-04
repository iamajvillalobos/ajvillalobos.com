RAILS_TEX = aj-villalobos-senior-ruby-on-rails-engineer-resume.tex
RAILS_PDF = aj-villalobos-senior-ruby-on-rails-engineer-resume.pdf
RAILS_TXT = aj-villalobos-senior-ruby-on-rails-engineer-resume.txt
RAILS_PUBLIC_PDF = ../public/aj-villalobos-senior-ruby-on-rails-engineer-resume.pdf

PRODUCT_TEX = aj-villalobos-senior-product-engineer-resume.tex
PRODUCT_PDF = aj-villalobos-senior-product-engineer-resume.pdf
PRODUCT_TXT = aj-villalobos-senior-product-engineer-resume.txt
PRODUCT_PUBLIC_PDF = ../public/aj-villalobos-senior-product-engineer-resume.pdf

.PHONY: all rails product clean

all: product

rails: $(RAILS_PDF) $(RAILS_TXT) $(RAILS_PUBLIC_PDF)

product: $(PRODUCT_PDF) $(PRODUCT_TXT) $(PRODUCT_PUBLIC_PDF)

$(RAILS_PDF): $(RAILS_TEX)
	@if command -v tectonic >/dev/null 2>&1; then \
		tectonic $(RAILS_TEX); \
	else \
		echo "No TeX compiler found. Install tectonic with: brew install tectonic"; \
		exit 1; \
	fi

$(PRODUCT_PDF): $(PRODUCT_TEX)
	@if command -v tectonic >/dev/null 2>&1; then \
		tectonic $(PRODUCT_TEX); \
	else \
		echo "No TeX compiler found. Install tectonic with: brew install tectonic"; \
		exit 1; \
	fi

$(RAILS_TXT): $(RAILS_PDF)
	@pdftotext -layout $(RAILS_PDF) - | perl -CS -pe "s/\x{2022}/-/g; s/\x{2019}/'/g; s/\x{2013}|\x{2014}/-/g; s/\x{00A0}/ /g; s/\x{FB01}/fi/g; s/\x{FB02}/fl/g; s/\x{037E}/;/g; s/\f/\n/g; s/[ \t]+$$//" > $(RAILS_TXT)

$(PRODUCT_TXT): $(PRODUCT_PDF)
	@pdftotext -layout $(PRODUCT_PDF) - | perl -CS -pe "s/\x{2022}/-/g; s/\x{2019}/'/g; s/\x{2013}|\x{2014}/-/g; s/\x{00A0}/ /g; s/\x{FB01}/fi/g; s/\x{FB02}/fl/g; s/\x{037E}/;/g; s/\f/\n/g; s/[ \t]+$$//" > $(PRODUCT_TXT)

$(RAILS_PUBLIC_PDF): $(RAILS_PDF)
	cp $(RAILS_PDF) $(RAILS_PUBLIC_PDF)

$(PRODUCT_PUBLIC_PDF): $(PRODUCT_PDF)
	cp $(PRODUCT_PDF) $(PRODUCT_PUBLIC_PDF)

clean:
	rm -f *.aux *.log *.out
