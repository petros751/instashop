export class Landmark {
  public title: string;
  public createdAt: Date;
  public updatedAt: Date;
  public short_info: string;
  public photo: string;
  public photo_thumb: string;
  public location: Array<string>;
  public objectId: string;
  public description: string;
    constructor(
      title: string,
      createdAt: Date,
      updatedAt: Date,
      short_info: string,
      photo: string,
      photo_thumb: string,
      location: Array<string>,
      objectId: string,
      description: string,
    ) {
      this.title = title;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.short_info = short_info;
      this.photo = photo;
      this.photo_thumb = photo_thumb;
      this.location = location;
      this.objectId = objectId;
      this.description = description;
    }
  }
  