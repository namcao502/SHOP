import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function FooterContacts() {
	return (
		<>
			<h3 className='page-footer__header'>Contact us</h3>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faWhatsapp} />
				</span>
				<a className='link' href='tel:+18001234567'>+84 36 8475 944</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faMapMarkerAlt} />
				</span>
				<a className='link' href='#'>Thu Duc City, Ho Chi Minh City, Vietnam</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faClock} />
				</span>
				7:00 AM &mdash; 6:00 PM
			</p>
		</>
	);
}