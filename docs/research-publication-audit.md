# Publication reconciliation — 17 September 2026

Sources: [Google Scholar](https://scholar.google.com/citations?user=9C6oFA0AAAAJ&hl=en), [DBLP search](https://dblp.org/search?q=marnijati+torkel), publisher DOI records linked in src/data/research/publications.js, and the [TTS abstract](https://appstaging.tts.org/program_view/lecture?id=1200&mode=details).

The existing canonical catalogue had seven biomedical papers. The updated catalogue has 17 authored works plus one acknowledged contribution. Every record has full authors, year, venue, DOI and a plain-language description. Entries are sorted by publication year, descending, within two research groups.

## Scholar reconciliation

The supplied profile returned 12 entries (pagesize=100):
- Seven existing biomedical works retained. BenchHub's Scholar preprint (2025) is represented once by its published 2026 Genome Biology article, DOI 10.1186/s13059-026-04251-3.
- GDot added, with its original publisher title and full authors.
- Kidney allocation abstract 332.10 added, with all nine authors confirmed in Scholar details and the TTS programme; DOI 10.1097/01.tp.0001250884.26116.30.
- SpaNorm added with the publisher's seven authors, and an explicit acknowledged-contribution note. Marni is thanked for assistance with Figure 1E, not listed as an author.
- “Daniel Kim” excluded: malformed 2017 citation with no venue; its source links to a 2014 motor-racing timing PDF and description consists of lap times. Do not invent a publication from this record.
- “Bruce Liu” excluded: names Wiebke Lehmkuhl and Reisetipp Triest, with no Torkel author, publication date or research venue.

## Graph publications

Nine distinct graph works were checked against publisher records and indexed DBLP/coauthor records: SubLinearForce (2024), BC-tree sampling (2021), Louvain (2021), GDot (2021), sublinear attraction (2021), connectivity-based sampling (2021 book; 2020 conference), sublinear force (2020), dynamic graph maps (2020), and Infomap (2019).

DBLP's direct API returned a bot challenge; indexed bibliographic records and primary publisher sources were used instead. The Infomap arXiv version is merged with its GD 2019 chapter. Distinct conference papers and expanded journal articles retain separate DOIs and entries. SubLinearForce uses the 2024 journal volume/issue year rather than the 2023 early-online date. Connectivity-based sampling uses the 2021 book year, with the 2020 conference identified in its venue.

## Maintenance

The sole canonical dataset is src/data/research/publications.js. Compatibility exports reuse it. Research displays both groups; old About/Publications routes redirect to Research. The Scholar profile ID is stored once alongside the dataset. Counts on the home page derive from the same dataset.
