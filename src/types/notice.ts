export default interface Notice {
  notification: {
    id: number;
    title: string;
    create_at: string;
    contents: string[];
    link: string;
  }[]
}