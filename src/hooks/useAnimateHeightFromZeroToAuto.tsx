import { getAutoHeight } from '@/helpers/getAutoHeight';
import { useLayoutEffect, useEffect, useRef } from 'react';
import { useUpdatedRef } from './useUpdatedRef';

const useAnimateHeightFromZeroToAuto = (
	elRef: React.MutableRefObject<HTMLElement | null>,
	duration: number,
	willOpen: boolean
) => {

	const willOpenRef = useUpdatedRef(willOpen)
	const durationRef = useUpdatedRef(duration)
	const cancelSetToAutoRef = useRef<NodeJS.Timeout>()
	const isMountedRef = useRef(false)

	useLayoutEffect(() => {
		if (!elRef.current) return //console.error('No target element was found')
		elRef.current.style.height = willOpenRef.current ? 'auto' : '0'
		isMountedRef.current = true

		return () => {
			isMountedRef.current = false
		}
	}, []) //eslint-disable-line

	useEffect(() => {
		if (!isMountedRef.current || !elRef.current) return //no animation when mounting

		cancelSetToAutoRef.current && clearTimeout(cancelSetToAutoRef.current)
		elRef.current.style.transition = `height ${durationRef.current}ms, margin ${durationRef.current}ms, padding ${durationRef.current}ms`

		const startHeight = `${elRef.current.clientHeight}px`
		const finalHeight = willOpen ? `${getAutoHeight(elRef.current)}px` : '0'

		elRef.current.style.height = startHeight
		setTimeout(() => {
			if (elRef.current)
				elRef.current.style.height = finalHeight
		}, 17)

		//after it has opened set height to auto
		cancelSetToAutoRef.current = setTimeout(() => {
			if (willOpenRef.current && elRef.current) //have to use a ref for "willOpen" inside timeout, else it will not work
				elRef.current.style.height = 'auto'
		}, durationRef.current + 100) //add 100 in case of bad CPU performance
	}, [ willOpen ]) //eslint-disable-line
}

export default useAnimateHeightFromZeroToAuto;