const linksForGuest: string[] = ["home", "sign in", "sign up"];
const linksForUser: string[] = ["home", "new article", "settings", "username"];

const getLinksForNavbar = (isVisitorInSystem: boolean): string[] => isVisitorInSystem ? linksForUser : linksForGuest;

export { getLinksForNavbar, linksForGuest, linksForUser };