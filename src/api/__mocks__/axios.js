const mock = jest.createMockFromModule('axios').default;

mock.create = () => mock;

export const mockGet = jest.fn();
export const mockPost = jest.fn();

mock.get = mockGet;
mock.post = mockPost;

export default mock;
