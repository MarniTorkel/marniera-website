# Geometry Art

The section uses the existing navigation and hash routes: /#/art, /#/art/gallery,
/#/art/generative, /#/art/studies and /#/art/experiments. Artwork details use
/#/art/gallery/:slug. Collection views use /#/art/collections/:id. Existing /#/work/:slug
artwork details and /#/geometry-art still work.

## Add artwork

1. Add a compressed web preview in assets/<collection>/ beside this file.
   Current folders include assets/voronoi/, assets/fibonacci/ and assets/tessellation/.
   The original three SVG studies remain directly in assets/.
2. Import the web preview in data/geometryArt.js and add a record to the artworks data.
   Supply id, stable slug, title, collection, description, technique, alt and webPreview.
   Optional fields include year, featured, previewOnly, etsyUrl, youtubeUrl, purchaseUrl,
   price, availability and printSource. Set image to the preview as well for older consumers.
3. Use a collection name from data/collections.js. Add a collection there if needed;
   its artwork field names the representative artwork slug.
4. Set featured on up to three pieces for the homepage teaser. Preview studies should
   retain previewOnly until replaced with artwork you want to present as finished.

webPreview is used by gallery and detail images; printSource is reserved metadata and is
never loaded by the gallery. Keep high-resolution print originals outside the web bundle.
The three new preview files are small illustrative SVG studies and can be replaced directly.

## External links

Set an individual artwork or collection etsyUrl / youtubeUrl only when the actual destination
exists. HTTPS Etsy and YouTube hosts are validated. Links open in a new tab with protection;
there are no placeholder shop/video links and no embedded video players.
Set artConfig.etsyShopUrl in data/config.js to enable the global Shop Geometry Art CTA.
No commerce service or payment code has been added.

## Future generators

The existing Ribbon Flow Field remains a live experiment under /#/work/flow-field.
Other generator names in data/collections.js are clearly marked as planned. Add future
interactive components in components/ and register them in the shared project catalog
(src/data/projects.js), following the existing FlowFieldDemo pattern. Keep parameter state
inside the generator so it can be embedded in either an art page or project detail.

## Files

GeometryArt.jsx renders the five art pages and collection/detail views.
components/GeometryHero.jsx supplies slow SVG motion with pause and reduced-motion support.
components/ArtworkCard.jsx is the existing artwork card, extended for gallery/detail links.
components/ArtGallery.jsx handles collection filtering.
components/ArtLinks.jsx handles optional print/process links.
data/geometryArt.js, collections.js and config.js separate content from presentation.

Use npm test for route/data/render checks. Build with npm run build; in the restricted
Windows environment use npm run build -- --configLoader native.
