import '@testing-library/jest-dom'

// Mock react-icons to avoid transform issues in the test environment
try {
	// `vi` is provided by Vitest when running tests
	globalThis.vi?.mock('react-icons/fa', () => ({
		FaInstagram: () => null,
		FaFacebookF: () => null,
		FaTiktok: () => null,
		FaArrowUp: () => null,
		FaWhatsapp: () => null,
		FaHammer: () => null,
		FaTools: () => null,
		FaNetworkWired: () => null
	}))
} catch (e) {
	// ignore when not running under Vitest
}
