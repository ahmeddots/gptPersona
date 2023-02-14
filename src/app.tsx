import { Form } from "./components/Form";
import { Personas } from "./components/Personas";
import { Preview } from "./components/Preview";
import { Actions } from "./components/Actions";

export function App() {
	return (
		<div class="min-h-screen min-w-screen flex flex-col select-none text-neutral-700">
			<nav class="p-8 flex flex-row justify-between w-full">
				<h1 class="text-2xl font-bold">
					gpt<span class="text-red-600">Persona</span>
				</h1>
				<Personas></Personas>
				<div>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/ahmeddots/gptpersona"
						class="text-lg font-bold active:text-red-600 transition-all"
					>
						Contribute
					</a>
				</div>
			</nav>

			<main class="grow flex items-center justify-center">
				<div class="flex items-start p-4 rounded-lg border-2 border-neutral-200 gap-4">
					<Form />
					<Actions></Actions>
					<Preview></Preview>
				</div>
			</main>

			<footer class="p-8 flex flex-col gap-4">
				<div class="flex flex-row gap-8">
					<h1 class="text-lg font-bold border-b-2 border-b-black">
						Disclaimer
					</h1>
					<h1 class="text-lg font-bold">FAQ</h1>
				</div>
				<div>Body (Switched)</div>
			</footer>
		</div>
	);
}
