# System zarządzania zadaniami domowymi

Projekt został stworzony w celu ułatwienia tworzenia, zarządzania i manipulacji zadaniami domowymi. Możesz dodawać nowe zadania, edytować ich opisy, statusy i daty, a także usuwać niepotrzebne zadania.

## Architektura projektu

Projekt został zbudowany według wzorca MVC (Model-View-Controller) Poniżej znajduje się lista technologii, z których korzystałem podczas tworzenia projektu:

1. **Express.js**: Framework Node.js, który ułatwia tworzenie serwerów i aplikacji internetowych.
2. **Body-parser**: Middleware do analizowania danych żądania.
3. **EJS (Embedded JavaScript)**: Silnik szablonów, który umożliwia generowanie dynamicznych treści HTML na podstawie danych z serwera.
4. **Tailwind CSS**: Biblioteka CSS, która oferuje wiele gotowych komponentów i narzędzi, aby ułatwić stylizację stron internetowych.

## Instrukcje instalacji i uruchomienia

Po sklonowaniu repozytorium należy wykonać następujące kroki:

1. Uruchomienie instalacji zależności za pomocą polecenia:
    ```
    npm install
    ```

2. Przejście do katalogu projektu:
    ```
    cd nazwa_projektu
    ```

3. Uruchomienie aplikacji za pomocą polecenia:
    ```
    node app.js
    ```

**Uwaga:** Upewnij się, że masz połączenie z Internetem, ponieważ biblioteka Tailwind CSS jest podłączana za pomocą CDN.
