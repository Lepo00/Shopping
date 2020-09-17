'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">shopping documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-86a25a69e282ca2b08c3638b8b69cbf0"' : 'data-target="#xs-components-links-module-AppModule-86a25a69e282ca2b08c3638b8b69cbf0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-86a25a69e282ca2b08c3638b8b69cbf0"' :
                                            'id="xs-components-links-module-AppModule-86a25a69e282ca2b08c3638b8b69cbf0"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-86a25a69e282ca2b08c3638b8b69cbf0"' : 'data-target="#xs-injectables-links-module-AppModule-86a25a69e282ca2b08c3638b8b69cbf0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-86a25a69e282ca2b08c3638b8b69cbf0"' :
                                        'id="xs-injectables-links-module-AppModule-86a25a69e282ca2b08c3638b8b69cbf0"' }>
                                        <li class="link">
                                            <a href="injectables/HttpCommunicationsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HttpCommunicationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link">CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CartModule-4b1c131cb634be640a4695cca3424d02"' : 'data-target="#xs-components-links-module-CartModule-4b1c131cb634be640a4695cca3424d02"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartModule-4b1c131cb634be640a4695cca3424d02"' :
                                            'id="xs-components-links-module-CartModule-4b1c131cb634be640a4695cca3424d02"' }>
                                            <li class="link">
                                                <a href="components/CartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartRoutingModule.html" data-type="entity-link">CartRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CheckoutModule.html" data-type="entity-link">CheckoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CheckoutModule-3449249e6f093b05a4f597cf1ccc62ba"' : 'data-target="#xs-components-links-module-CheckoutModule-3449249e6f093b05a4f597cf1ccc62ba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CheckoutModule-3449249e6f093b05a4f597cf1ccc62ba"' :
                                            'id="xs-components-links-module-CheckoutModule-3449249e6f093b05a4f597cf1ccc62ba"' }>
                                            <li class="link">
                                                <a href="components/CheckoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CheckoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CheckoutRoutingModule.html" data-type="entity-link">CheckoutRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CustomizeModule.html" data-type="entity-link">CustomizeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CustomizeModule-fec33254c253730ef9c012b44f7f49f2"' : 'data-target="#xs-components-links-module-CustomizeModule-fec33254c253730ef9c012b44f7f49f2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomizeModule-fec33254c253730ef9c012b44f7f49f2"' :
                                            'id="xs-components-links-module-CustomizeModule-fec33254c253730ef9c012b44f7f49f2"' }>
                                            <li class="link">
                                                <a href="components/CustomizeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomizeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomizeRoutingModule.html" data-type="entity-link">CustomizeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FeaturesModule.html" data-type="entity-link">FeaturesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-37466b212fd154f5ca5b2ac70f5f53da"' : 'data-target="#xs-components-links-module-HomeModule-37466b212fd154f5ca5b2ac70f5f53da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-37466b212fd154f5ca5b2ac70f5f53da"' :
                                            'id="xs-components-links-module-HomeModule-37466b212fd154f5ca5b2ac70f5f53da"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-ddd35ed0b742ae5514663eb121282119"' : 'data-target="#xs-components-links-module-LoginModule-ddd35ed0b742ae5514663eb121282119"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-ddd35ed0b742ae5514663eb121282119"' :
                                            'id="xs-components-links-module-LoginModule-ddd35ed0b742ae5514663eb121282119"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterModule.html" data-type="entity-link">RegisterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterModule-3f1e38b783fa5869360b24345d0a7dfb"' : 'data-target="#xs-components-links-module-RegisterModule-3f1e38b783fa5869360b24345d0a7dfb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterModule-3f1e38b783fa5869360b24345d0a7dfb"' :
                                            'id="xs-components-links-module-RegisterModule-3f1e38b783fa5869360b24345d0a7dfb"' }>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterRoutingModule.html" data-type="entity-link">RegisterRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-ef5b905aab7df09d290975c4dd04981b"' : 'data-target="#xs-components-links-module-SharedModule-ef5b905aab7df09d290975c4dd04981b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-ef5b905aab7df09d290975c4dd04981b"' :
                                            'id="xs-components-links-module-SharedModule-ef5b905aab7df09d290975c4dd04981b"' }>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShippingModule.html" data-type="entity-link">ShippingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ShippingModule-ca4bfd4c6426c039673c3e659b73b882"' : 'data-target="#xs-components-links-module-ShippingModule-ca4bfd4c6426c039673c3e659b73b882"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShippingModule-ca4bfd4c6426c039673c3e659b73b882"' :
                                            'id="xs-components-links-module-ShippingModule-ca4bfd4c6426c039673c3e659b73b882"' }>
                                            <li class="link">
                                                <a href="components/ShippingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShippingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShippingRoutingModule.html" data-type="entity-link">ShippingRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartEffects.html" data-type="entity-link">CartEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpCommunicationsService.html" data-type="entity-link">HttpCommunicationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentEffects.html" data-type="entity-link">PaymentEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShippingEffects.html" data-type="entity-link">ShippingEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserEffects.html" data-type="entity-link">UserEffects</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PagesGuard.html" data-type="entity-link">PagesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartState.html" data-type="entity-link">CartState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Payment.html" data-type="entity-link">Payment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaymentState.html" data-type="entity-link">PaymentState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link">Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Shipping.html" data-type="entity-link">Shipping</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShippingState.html" data-type="entity-link">ShippingState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserState.html" data-type="entity-link">UserState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});