(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"],{

/***/ "./src/routes/about.svelte":
/*!*********************************!*\
  !*** ./src/routes/about.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/routes/about.svelte generated by Svelte v3.13.0 */


const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let input0;
	let input0_updating = false;
	let t3;
	let input1;
	let input1_updating = false;
	let t4;
	let span;
	let t5;
	let t6;
	let input2;
	let t7;
	let button;
	let t8;
	let dispose;

	function input0_input_handler() {
		input0_updating = true;
		ctx.input0_input_handler.call(input0);
	}

	function input1_input_handler() {
		input1_updating = true;
		ctx.input1_input_handler.call(input1);
	}

	const block = {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Calculate Pecentages");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("\nis what percent of\n");
			input1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(ctx.c);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			input2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("ADD");
			this.h();
		},
		l: function claim(nodes) {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", {});
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Calculate Pecentages");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			input0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "INPUT", { type: true });
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\nis what percent of\n");
			input1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "INPUT", { type: true });
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SPAN", {});
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span_nodes, ctx.c);
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			input2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "INPUT", { type: true, value: true });
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "BUTTON", {});
			var button_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button_nodes, "ADD");
			button_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			document.title = "Percentage Calculator";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 13, 0, 167);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input0, "type", "number");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input0, file, 15, 0, 198);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input1, "type", "number");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input1, file, 17, 0, 256);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 18, 0, 295);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(input2, "type", "number");
			input2.value = "";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input2, file, 19, 0, 312);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 21, 0, 346);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(input0, "input", input0_input_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(input1, "input", input1_input_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(button, "click", ctx.add, false, false, false)
			];
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, input0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input0, ctx.a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, input1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input1, ctx.b);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t6, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, input2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t7, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, button, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, t8);
		},
		p: function update(changed, ctx) {
			if (!input0_updating && changed.a) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input0, ctx.a);
			}

			input0_updating = false;

			if (!input1_updating && changed.b) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_input_value"])(input1, ctx.b);
			}

			input1_updating = false;
			if (changed.c) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t5, ctx.c);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(h1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t2);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(input0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t3);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(input1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t4);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(span);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t6);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(input2);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t7);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(button);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let a = 1;
	let b = 2;
	let c = "";

	function add() {
		$$invalidate("c", c = a + b);
	}

	function input0_input_handler() {
		a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["to_number"])(this.value);
		$$invalidate("a", a);
	}

	function input1_input_handler() {
		b = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["to_number"])(this.value);
		$$invalidate("b", b);
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("a" in $$props) $$invalidate("a", a = $$props.a);
		if ("b" in $$props) $$invalidate("b", b = $$props.b);
		if ("c" in $$props) $$invalidate("c", c = $$props.c);
	};

	return {
		a,
		b,
		c,
		add,
		input0_input_handler,
		input1_input_handler
	};
}

class About extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQ00sQ0FBQyxHQUFHLENBQUM7S0FDTCxDQUFDLEdBQUcsQ0FBQztLQUNMLENBQUMsR0FBRyxFQUFFOztVQUVELEdBQUc7b0JBQ1YsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDIiwiZmlsZSI6ImJlNWJkNmFjYzZmNDY5NzdlNTgyL2Fib3V0LmFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgbGV0IGEgPSAxO1xuICBsZXQgYiA9IDI7XG4gIGxldCBjID0gXCJcIjtcblxuICBmdW5jdGlvbiBhZGQoKSB7XG4gICAgYyA9IGEgKyBiO1xuICB9XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+UGVyY2VudGFnZSBDYWxjdWxhdG9yPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48aDE+Q2FsY3VsYXRlIFBlY2VudGFnZXM8L2gxPlxuXG48aW5wdXQgdHlwZT1cIm51bWJlclwiIGJpbmQ6dmFsdWU9e2F9IC8+XG5pcyB3aGF0IHBlcmNlbnQgb2ZcbjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgYmluZDp2YWx1ZT17Yn0gLz5cbjxzcGFuPntjfTwvc3Bhbj5cbjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCJcIiAvPlxuXG48YnV0dG9uIG9uOmNsaWNrPXthZGR9PkFERDwvYnV0dG9uPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==