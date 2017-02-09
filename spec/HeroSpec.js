describe("Hero", function () {
    var hero;
    
    beforeEach(function () {
        hero = new Hero();
    });
    
    it("should be able to walk", function () {
        hero.calculate();
        expect(hero.result).not.toBe(1);
        expect(hero.result).toBe(0);
        /*expect(hero.result).toEqual(0);
        expect(hero.result).not.toEqual(0);
        expect(hero.result).toMatch(0);
        expect(hero.result).not.toMatch(0);
        expect(hero.result).toBeDefined(0);
        expect(hero.result).not.toBeDefined(0);
        expect(hero.result).toBeUndefined(0);
        expect(hero.result).not.toBeUndefined(0);
        expect(hero.result).toBeNull(0);
        expect(hero.result).not.toBeNull(0);
        expect(hero.result).toBeTruthy(0);
        expect(hero.result).not.toBeTruthy(0);
        expect(hero.result).toContain(0);
        expect(hero.result).not.toContain(0);
        expect(hero.result).toBeLessThan(0);
        expect(hero.result).not.toBeLessThan(0);
        expect(hero.result).toBeGreaterThan(0);
        expect(hero.result).not.toBeGreaterThan(0);
        expect(hero.result).toBeCloseTo(0);
        expect(hero.result).not.toBeCloseTo(0);
        expect(hero.result).toThrow(0);
        expect(hero.result).not.toThrow(0);
        expect(hero.result).toThrowError(0);
        expect(hero.result).not.toThrowError(0);
        expect(hero.result).toThrow(0);
        expect(hero.result).not.toThrow(0);
        expect(hero.result).toThrow(0);
        expect(hero.result).not.toThrow(0);*/
    });
});