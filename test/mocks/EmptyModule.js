// this module is used to replace components with a simple mock (e.g. inline svgs)
export default jest.fn((cb) => cb(null, true));