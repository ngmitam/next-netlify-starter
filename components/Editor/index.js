import React, { useRef } from "react";
import styles from "./Editor.module.css";

const suggestions = ["sisu", "network", "sisu network"];

// popup component for autocomplete list
const Popup = ({ children, position }) => {
	const popupRef = useRef(null);

	React.useEffect(() => {
		// get parent position
		const parent = popupRef.current.parentElement;
		const parentRect = parent.getBoundingClientRect();
		const parentTop = parentRect.top + window.scrollY;
		const parentLeft = parentRect.left + window.scrollX;

		console.log(parentTop, parentLeft);
		// set position of popup
		popupRef.current.style.top = position.top - parentTop + "px";
		popupRef.current.style.left = position.left - parentLeft + "px";
	}, [position]);

	// auto hide popup when click outside
	React.useEffect(() => {
		const handleClickOutside = (e) => {
			if (popupRef.current && !popupRef.current.contains(e.target)) {
				// set position of popup out of screen
				popupRef.current.style.top = "-1000px";
				popupRef.current.style.left = "-1000px";
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div ref={popupRef} className={styles.popup}>
			{children}
		</div>
	);
};

export default function Editor() {
	const [isBold, setIsBold] = React.useState(false);
	const [isStrikethrough, setIsStrikethrough] = React.useState(false);
	const [autocompleteList, setAutocompleteList] = React.useState([]);
	const [autocompletePosition, setAutocompletePosition] = React.useState({
		top: -1000,
		left: -1000,
	});

	// get current component position
	const editorRef = useRef(null);

	React.useEffect(() => {
		const editor = editorRef.current;

		if (!editor) return;

		// get position of editor
		const rect = editor.getBoundingClientRect();
		const top = rect.top + window.scrollY;
		const left = rect.left + window.scrollX;
		console.log(top, left);
	}, []);

	return (
		<div className={styles.container}>
			{/* autocomplete list popup */}
			<Popup
				position={autocompletePosition}
				children={
					<div className={styles.autocomplete}>
						{autocompleteList.map((item, index) => (
							<div
								className={styles.popup__item}
								key={item}
								onClick={(e) => {
									// get current typing word before cursor
									const selection = window.getSelection();
									const range = selection.getRangeAt(0);
									const text =
										range.startContainer.textContent;

									// get position of cursor in current typing word
									const cursorPosition =
										selection.anchorOffset;

									// get text before cursor
									const beforeCursorText = text.slice(
										0,
										cursorPosition
									);

									// replace current typing word with autocomplete item on beforeCursorText
									const beforeCursorTextWithoutWord =
										beforeCursorText.slice(
											0,
											beforeCursorText.lastIndexOf(" ") +
												1
										);

									const beforeCursorTextWithItem =
										beforeCursorTextWithoutWord + item;

									// get text after cursor
									const afterCursorText =
										text.slice(cursorPosition);

									// new text
									const newText =
										beforeCursorTextWithItem +
										afterCursorText;

									// set new text
									range.startContainer.textContent = newText;

									// set cursor position
									range.setStart(
										range.startContainer,
										beforeCursorTextWithItem.length
									);

									setAutocompletePosition({
										top: -1000,
										left: -1000,
									});
								}}
							>
								{item}
							</div>
						))}
					</div>
				}
			/>
			<h1>Editor</h1>
			<div className={styles.prevent_select}>
				<div>
					<label>auto-complete: sisu, sisu network, network</label>
				</div>
				{/* editor toolbar */}
				{/* bold */}
				<button
					className={
						isBold
							? styles.button + " " + styles.button__active
							: styles.button
					}
					onClick={(e) => {
						// prevent default behavior of button
						e.preventDefault();

						document.execCommand("bold", false, null);

						const selection = window.getSelection();
						// check if selection text is bold
						let isBold = false;
						let selectionNode = selection.anchorNode;
						while (selectionNode !== null) {
							if (
								selectionNode.nodeName === "B" ||
								selectionNode.nodeName === "STRONG"
							) {
								isBold = true;
								break;
							}
							selectionNode = selectionNode.parentNode;
						}

						// set bold state
						setIsBold(isBold);
					}}
					onMouseDown={(e) => {
						e.preventDefault();
					}}
				>
					Bold
				</button>
				{/* strikethrough */}
				<button
					className={
						isStrikethrough
							? styles.button + " " + styles.button__active
							: styles.button
					}
					onClick={(e) => {
						// prevent default behavior of button
						e.preventDefault();

						document.execCommand("strikeThrough", false, null);

						const selection = window.getSelection();
						// check if selection text is strikethrough
						let isStrikethrough = false;
						let selectionNode = selection.anchorNode;
						while (selectionNode !== null) {
							if (
								selectionNode.nodeName === "STRIKE" ||
								selectionNode.nodeName === "S"
							) {
								isStrikethrough = true;
								break;
							}
							selectionNode = selectionNode.parentNode;
						}

						// set strikethrough state
						setIsStrikethrough(isStrikethrough);
					}}
					onMouseDown={(e) => {
						e.preventDefault();
					}}
				>
					Strikethrough
				</button>

				{/* color */}
				<label>color:</label>
				<input
					type="color"
					onChange={(e) => {
						document.execCommand(
							"foreColor",
							false,
							e.target.value
						);
					}}
					onClick={(e) => {
						document.execCommand(
							"foreColor",
							false,
							e.target.value
						);
					}}
				/>
			</div>

			<div className={styles.editor}>
				<div
					className={styles.editor__content}
					contentEditable={true}
					onSelect={(e) => {
						const selection = window.getSelection();
						// check if selection text is bold
						let isBold = false;
						let selectionNode = selection.anchorNode;
						while (selectionNode !== null) {
							if (
								selectionNode.nodeName === "B" ||
								selectionNode.nodeName === "STRONG"
							) {
								isBold = true;
								break;
							}
							selectionNode = selectionNode.parentNode;
						}

						// check if selection text is strikethrough
						let isStrikethrough = false;
						selectionNode = selection.anchorNode;
						while (selectionNode !== null) {
							if (
								selectionNode.nodeName === "S" ||
								selectionNode.nodeName === "STRIKE"
							) {
								isStrikethrough = true;
								break;
							}
							selectionNode = selectionNode.parentNode;
						}

						setIsBold(isBold);
						setIsStrikethrough(isStrikethrough);
					}}
					onInput={(e) => {
						// get current typing word before cursor
						const selection = window.getSelection();
						const range = selection.getRangeAt(0);
						const text = range.startContainer.textContent;

						// get position of cursor in current typing word
						const cursorPosition = selection.anchorOffset;

						// get text before cursor
						const beforeCursorText = text.slice(0, cursorPosition);

						// get current typing word
						const word = beforeCursorText.slice(
							beforeCursorText.lastIndexOf(" ") + 1
						);

						const autocompleteList = suggestions.filter(
							(suggestion) =>
								word.length &&
								word.length >= 3 &&
								suggestion.startsWith(word)
						);

						// show autocomplete list
						if (autocompleteList.length) {
							// get position of current typing word in screen
							const rect = range.getBoundingClientRect();
							const top = rect.top + window.scrollY;
							const left = rect.left + window.scrollX;

							// set position of autocomplete list
							setAutocompletePosition({ top, left });

							// set autocomplete list
							setAutocompleteList(autocompleteList);
						} else {
							// hide autocomplete list
							setAutocompleteList([]);

							// set position of autocomplete list out of screen
							setAutocompletePosition({
								top: -1000,
								left: -1000,
							});
						}
					}}
				></div>
			</div>
		</div>
	);
}
