import {
  getLinksForNavbar,
  linksForGuest,
  linksForUser,
} from "./../src/components/Header/Navbar/services";

describe("Header navbar", () => {
  const isVisitorInSystem = true;
  test("Switch links' sets", () => {
    expect(getLinksForNavbar(isVisitorInSystem)).toEqual(linksForUser);
  });
  test("Switch links' sets", () => {
    expect(getLinksForNavbar(!isVisitorInSystem)).toEqual(linksForGuest);
  });
});
