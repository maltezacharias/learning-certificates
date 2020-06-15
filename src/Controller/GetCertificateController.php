<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class GetCertificateController extends AbstractController
{
    /**
     * @Route("/GetCertificate", name="GetCertificate")
     */
    public function list()
    {
        $number = random_int(0, 100);
        return $this->render('getcertificate.html.twig',[]);
    }
}
