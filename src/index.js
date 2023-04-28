import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'

/**
 * This is the main entry point for your plugin.
 *
 * All information regarding plugin development can be found at
 * https://developer.vatom.com/spaces/plugins-in-spaces/guide-create-plugin
 *
 * @license MIT
 * @author Vatom Inc.
 */
export default class MyPlugin extends BasePlugin {

    /** Plugin info */
    static id = "com.jjv360.simple-start"
    static name = "Simple Start"

    /** Called on load */
    onLoad() {

        // Register start screen
        this.menus.register({
            id: `${this.id}.bar`,
            title: 'Simple Start - Bar',
            section: 'start-screen',
            panel: {
                iframeURL: this.paths.absolute('simple-start-bar.html')
            }
        })

    }

}
