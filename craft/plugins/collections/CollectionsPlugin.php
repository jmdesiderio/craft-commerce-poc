<?php
namespace Craft;

class CollectionsPlugin extends BasePlugin
{
    function getName()
    {
         return Craft::t('Zx Collections');
    }

    function getVersion()
    {
        return '1.0';
    }

    function getDeveloper()
    {
        return 'Peter Hwang';
    }

    function getDeveloperUrl()
    {
        return 'http://zx-ventures.com';
    }

    function getDescription()
    {
        return 'Plugin for adding production collections for Commerce';
    }
    
    public function getCollectionsHtml()
    {
       return craft()->templates->render('collections/settings', array(
           'settings' => $this->getSettings()
       ));
    }

    public function prepSettings($settings)
    {
        // Modify $settings here...

        return $settings;
    }

    public function modifyCpNav(&$nav)
    {
      if (craft()->userSession->isAdmin())
      {
          $nav['ZX Collections'] = array('label' => 'Product Collections', 'url' => 'collections/settings');
      }    
    }
}