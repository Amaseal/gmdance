import fs from "fs";

export const load = async () => {
  let video = fs
    .readdirSync("./static/gallery/video", { withFileTypes: true })
    .map((item) => item.name);

  let trenini = fs
    .readdirSync("./static/gallery/trenini", { withFileTypes: true })
    .map((item) => item.name);

  let treneri = fs
    .readdirSync("./static/gallery/treneri", { withFileTypes: true })
    .map((item) => item.name);

  let vasara = fs
    .readdirSync("./static/gallery/vasara", { withFileTypes: true })
    .map((item) => item.name);

  let fotosesijas = fs
    .readdirSync("./static/gallery/fotosesijas", { withFileTypes: true })
    .map((item) => item.name);

  let kopigi = fs
    .readdirSync("./static/gallery/kopigi", { withFileTypes: true })
    .map((item) => item.name);

  return { video, trenini, treneri, vasara, fotosesijas, kopigi };
};
