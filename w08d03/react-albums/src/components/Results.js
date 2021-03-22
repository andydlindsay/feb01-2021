import React from "react";
import { getYear } from "date-fns";

import Album from "components/Album";

export default function Results(props) {
  const { results, filters } = props;

  return results
    .filter(album => {
      if (
        filters.Explicit === false &&
        album.collectionExplicitness === "explicit"
      ) {
        return false;
      }

      if (
        filters["1900s"] === false &&
        getYear(new Date(album.releaseDate)) < 2000
      ) {
        return false;
      }

      if (
        filters["2000s"] === false &&
        getYear(new Date(album.releaseDate)) >= 2000
      ) {
        return false;
      }

      if (
        filters.Single === false &&
        (album.trackCount === 1 || album.collectionName.endsWith("- Single"))
      ) {
        return false;
      }

      if (
        filters.EP === false &&
        ((album.trackCount >= 4 && album.trackCount <= 6) ||
          album.collectionName.endsWith("- EP"))
      ) {
        return false;
      }

      if (album.collectionName.length > 127 || album.artistName.length > 127) {
        return false;
      }

      return true;
    })
    .map(album => {
      return <Album key={album.collectionId} {...album} />;
    });
}
