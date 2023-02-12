export function FormInput(props: {
	title: string;
	value: string;
	setValue: (val: any) => void;
}) {
	return (
		<div class="flex flex-row gap-2 p-2">
			<label for={props.title.toLowerCase()} class="font-bold">
				{props.title}
			</label>
			<input
				type="text"
				name={props.title.toLowerCase()}
				onChange={props.setValue}
			/>
		</div>
	);
}