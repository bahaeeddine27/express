module.exports = {
    generateLinksWood: function(wood) {
        return [
            {
              rel: "self",
              method: "GET",
              href: `/api/wood/${wood.id}`,
            },
            {
              rel: "update",
              method: "PUT",
              href: `/api/wood/${wood.id}`,
            },
            {
              rel: "delete",
              method: "DELETE",
              href: `/api/wood/${wood.id}`,
            },
            {
                rel: "sameHardness",
                method: "GET",
                href: `/api/wood/hardness/${wood.hardness}`
            },
        ];
    },
    generateLinksWoodCollection: function() {
        return [
            {
                "rel": "all",
                "method": "GET",
                "href": "/api/wood/"
            },
            {
                "rel": "by hardness",
                "method": "GET",
                "href": "/api/wood/:hardness"
            },
            {
                "rel": "create",
                "method": "POST",
                "href": "/api/wood/"
            }
        ];
    },
}
