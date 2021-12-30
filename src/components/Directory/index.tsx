import { useState, useEffect } from "react";
import MenuItem from "../MenuItem";

import SECTIONS_DATA from "../../assets/data/sections.data";

import "./directory.styles.scss";

type Section = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
}

function Directory() {
  const [sectionsList, setSectionList] = useState<Section[]>();

  useEffect(() => {
    const sections = SECTIONS_DATA;
    setSectionList(sections);
  }, []);
  
  return (
    <div className="directory-menu">
        {
          sectionsList?.map(({ title, imageUrl, id, size, linkUrl }) => (
            <MenuItem key={id} title={title} imageBackground={imageUrl} sizeValue={size} link={linkUrl} />
          ))
        }
      </div>
  );
}

export default Directory;
