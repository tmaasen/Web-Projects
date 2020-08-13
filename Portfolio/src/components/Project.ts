export class Project {
  id: number | undefined;
  name: string = '';
  description: string = '';
  imageUrl: string = '';
  techUsed: string = '';
  gitRepo: string = '';
  isFinished: boolean = false;
  static map: any;
  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.description) this.description = initializer.description;
    if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
    if (initializer.techUsed) this.techUsed = initializer.techUsed;
    if (initializer.gitRepo) this.gitRepo = initializer.gitRepo;
    if (initializer.isFinished) this.isFinished = initializer.isFinished;
  }
}
