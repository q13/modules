define(function(e){var t=e("../src/daparser"),n=e("$"),r=document.body;describe("DAParser",function(){test("single data-xx",function(){var e=n('<div data-key="value"></div>').appendTo(r),i=t.parseElement(e);expect(i.key).toBe("value"),e.remove()}),test("multi data-xx",function(){var e=n('<div data-key="value" data-key2="val2"></div>').appendTo(r),i=t.parseElement(e);expect(i.key).toBe("value"),expect(i.key2).toBe("val2"),e.remove()}),test("convert dash-name to camelCasedName",function(){var e=n('<div data-x-y-123a-_B="val" data-x-y="val" data-AbcD-x="val"></div>').appendTo(r),i=t.parseElement(e);expect(i.xY).toBe("val"),expect(i.abcdX).toBe("val"),e.remove()}),test("table element",function(){var e=n('<table><tr><td data-x="1"></td></tr></table>').appendTo(r),i=t.parseElement(e.find("td")[0]);expect(i.x).toBe(1),e.remove()})})});