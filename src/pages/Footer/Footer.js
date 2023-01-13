import React from 'react';

const Footer = () => {
    return (
        <div>
            <div
                class="grid grid-cols-1 gap-8 pt-8 border-t border-gray-100 base:grid-cols-2 lg:grid-cols-4 lg:pt-16"
            >
                <div>
                    <p class="font-medium text-gray-900">Services</p>

                    <nav aria-label="Footer Navigation - Services" class="mt-6">
                        <ul class="space-y-4 text-base">
                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    1on1 Coaching
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    Company Review
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    Accounts Review
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    HR Consulting
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    SEO Optimisation
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <p class="font-medium text-gray-900">Company</p>

                    <nav aria-label="Footer Navigation - Company" class="mt-6">
                        <ul class="space-y-4 text-base">
                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    Meet the Team
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    Accounts Review
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <p class="font-medium text-gray-900">Helpful Links</p>

                    <nav aria-label="Footer Navigation - Company" class="mt-6">
                        <ul class="space-y-4 text-base">
                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    FAQs
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    Live Chat
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <p class="font-medium text-gray-900">Legal</p>

                    <nav aria-label="Footer Navigation - Legal" class="mt-6">
                        <ul class="space-y-4 text-base">
                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    Accessibility
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    Returns Policy
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    Refund Policy
                                </a>
                            </li>

                            <li>
                                <a href=" " class="text-gray-700 transition hover:opacity-75">
                                    Hiring Statistics
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <p class="text-xs text-gray-500">
                &copy; 2022. Company Name. All rights reserved.
            </p>
        </div>


    );
};

export default Footer;