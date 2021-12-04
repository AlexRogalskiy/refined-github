import React from 'dom-chef';
import select from 'select-dom';
import * as pageDetect from 'github-url-detection';

import features from '.';

function init(): false | void {
	const originalPreviousNext = select('.commit .BtnGroup.float-right');
	if (!originalPreviousNext) {
		return false;
	}

	// Wrap the button in a <div> to avoid #4503
	select('#files')!.after(
		<div className="d-flex flex-justify-end">
			{originalPreviousNext.cloneNode(true)}
		</div>,
	);

	select('#files ~ .flash-warn')?.classList.add('mt-3');
}

void features.add(import.meta.url, {
	include: [
		pageDetect.isPRFiles,
		pageDetect.isPRCommit,
	],
	deduplicate: 'has-rgh-inner',
	init,
});
