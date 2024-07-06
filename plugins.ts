import { Page, Site} from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import metas from "lume/plugins/metas.ts";
import sass from "lume/plugins/sass.ts";
import postcss from "lume/plugins/postcss.ts";
import inline from "lume/plugins/inline.ts";
import pagefind from "lume/plugins/pagefind.ts";
import date from "lume/plugins/date.ts";
import svgo from "lume/plugins/svgo.ts";
import decap_cms from "lume/plugins/decap_cms.ts";

import { nl } from "npm:date-fns/locale";

export interface Options {
    date?: Partial<DateOptions>;
    pagefind?: Partial<PagefindOptions>;
}

export default function (options: Options = {}) {
    return (site: Site) => {
        site
            //.use(favicon())
            .use(metas())
            .use(sass())
            .use(postcss())
            .use(inline())
            .use(pagefind())
            .use(date({
                formats: {
                    "READABLE_FORMAT": "PPP",
                },
                locales: { nl, },
            }))
            .use(svgo())
            //.use(decap_cms())

            .filter(
                "capitalizeFirst",
                (string) => string.charAt(0).toUpperCase() + string.slice(1)
            )

            .copy("js")
            .copy("static", ".");
    }
}