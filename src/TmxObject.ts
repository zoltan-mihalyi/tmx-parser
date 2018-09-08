export class TmxObject {
    name: string | null = null;
    type: string | null = null;
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    rotation = 0;
    properties = {};
    gid = null;
    visible = true;
    ellipse = false;
    polygon = null;
    polyline = null;
}
