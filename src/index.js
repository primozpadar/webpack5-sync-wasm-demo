import { fact } from "./factorial.wasm";

for (let i = 1; i <= 20; i++) {
  console.log(fact(i));
}
