import '@testing-library/jest-dom'

/**
 * Mocks the browser `window.fetch()` method that isn't available in Jest as it uses the Node runtime.
 * Starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.
 * @param data The data to return in the response. Must be a Json object with a `results` property holding an array, e.g. `{ results: [1, 2, 3] }`
 * @returns Returns a Promise that resolves to the Response object representing the response to a request.
 */
export function mockFetch(data: any) {
    return jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => data,
        }),
    );
}

// Here just to stop error about no tests found
test('demo', () => {
    expect(true).toBe(true)
});