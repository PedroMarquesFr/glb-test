import Cookies from 'js-cookie';

export interface Person {
  id: number,
  displayName: string,
  email: string
}

class CookieService {
  static setPerson(person: Person) {
    console.log(person)
    Cookies.set('person', JSON.stringify(person), { expires: 1 });
  }

  static getPerson(): Person | null {
    const personCookie = Cookies.get('person');
    return personCookie ? JSON.parse(personCookie) : null;
  }

  static setToken(token: string) {
    Cookies.set('token', token, { expires: 1});
  }

  static getToken(): string | undefined {
    return Cookies.get('token');
  }
}

export default CookieService;
