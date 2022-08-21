# Glossary and Resources
## Resources
- Glossary of MDN: https://developer.mozilla.org/en-US/docs/Glossary
## Header:

    Usually a big strip across the top with a big heading, logo, and perhaps a tagline. This usually stays the same from one webpage to another.

## Navigation bar:
    Links to the site's main sections; usually represented by menu buttons, links, or tabs. Like the header, this content usually remains consistent from one webpage to another — having inconsistent navigation on your website will just lead to confused, frustrated users. Many web designers consider the navigation bar to be part of the header rather than an individual component, but that's not a requirement; in fact, some also argue that having the two separate is better for accessibility, as screen readers can read the two features better if they are separate.

## Main content:
    A big area in the center that contains most of the unique content of a given webpage, for example, the video you want to watch, or the main story you're reading, or the map you want to view, or the news headlines, etc. This is the one part of the website that definitely will vary from page to page!

## Sidebar:
    Some peripheral info, links, quotes, ads, etc. Usually, this is contextual to what is contained in the main content (for example on a news article page, the sidebar might contain the author's bio, or links to related articles) but there are also cases where you'll find some recurring elements like a secondary navigation system.

## Footer:
    A strip across the bottom of the page that generally contains fine print, copyright notices, or contact info. It's a place to put common information (like the header) but usually, that information is not critical or secondary to the website itself. The footer is also sometimes used for SEO purposes, by providing links for quick access to popular content.

# CSS
Reference          : "https://www.w3schools.com/cssref/css_selectors.asp"
Attribute selectors: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors"
Boxes              : "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"
@rules             : "https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule" 
## Style
### Basic Style
tag-name {
    tag-property: set-tag-property;
    }
Applies set-tag-property to tag-name

### Nested Tags
tag-name inside-tag {
    tag-property: set-tag-property;
    }

Applies if only inside-tag is inside of tag-name

### Plus Operator
tag-name + inside-tag {
    tag-property: set-tag-property;
    }

Applies only inside-tag if inside-tag directly after (or inside?) tag-name

### Style Within Classes
tag-name.class-name {
    tag-property: set-tag-property;
    }

Applies only if tag-name has class name of class-name

### Style just Classes
.class-name {
    tag-property: set-tag-property;
    }

Applies every tag that has class name `class-name`

### Apply style multiple description
des1, des2, des3.class-name {
    tag-property: set-tag-property;
    }

Applies style to `des1`, `des2`, `des3.class-name`.
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span { }

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p { }


