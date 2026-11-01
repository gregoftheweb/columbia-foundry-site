# Driver Guide quiz

The opening page offers Quick test (5 questions) and Full test (40 questions).
Each button immediately starts a random test from the 119-question bank in `questions.js`.
To start a shorter manual test directly, open `/quiz/?questioncount=5`.
Positive whole numbers are capped at 40;
missing or invalid values use the normal 40. Passing requires 80%, rounded up
(4 out of 5 for a five-question run). Retake Quiz returns to the test chooser.

Each question's `sources` array contains stable section keys in
`guide-sections.js`; choice shuffling retains those markers.

Missed answers open a dialog in the parent page so the source stays visible in
the browser viewport even when reviewing a long results list. The dialog shows
original section text and links to the corresponding PDF pages. Escape and Close
return keyboard focus to the study button.

`guide-sections.js` is a text snapshot extracted with `pdftotext -layout` from
`driver-guide.pdf`. Its page numbers are 1-based PDF positions, not printed
section numbers. Keep both files together when publishing. If replacing the PDF,
refresh the extracted text and page markers and review question source mappings.
PDF diagrams remain available through the original-page links; text extraction
does not reproduce their layout.

The default city speed-limit question cites RCW 46.61.400 instead of the guide.
Its source record contains a labeled statutory excerpt and an official law link.
