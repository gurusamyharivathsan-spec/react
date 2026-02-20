import { sum } from "../sum";

test('Sum is executed', () => { 
    const res = sum(5,9);
    expect(res).toBe(14);
 })